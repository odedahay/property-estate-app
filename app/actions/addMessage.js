'use server';
import connectedDB from "@/config/database";
import Message from "@/models/Message";
import { getSessionUser } from '@/utils/getSessionUser';

async function addMessage(previousState,formData) {
    await connectedDB();
    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.user) {
        throw new Error('User ID is required');
    }

    const { user } = sessionUser;

    const recipient = formData.get('recipient');

   if(user.id === recipient){
     return {error: 'You cannot send a message to yourself'};
   }

   const newMessage = new Message({
    sender: user.id,
    recipient,
    property: formData.get('property'),
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    body: formData.get('message'),
   });

   await newMessage.save();
   return {submitted: true};
}

export default addMessage;