'use server';

import connectedDB from "@/config/database";
import Message from "@/models/Message"; 
import { getSessionUser } from "@/utils/getSessionUser";    
import { revalidatePath } from "next/cache";

async function markMessageAsRead(messageId) {
    await connectedDB();
    const sessionUser = await getSessionUser();

    if(!sessionUser || !sessionUser.user) {
        throw new Error('User ID is required');
    }

    const { userId } = sessionUser;
    const message = await Message.findById(messageId);

    if(!message) {
        throw new Error('Message not found');
    }

    // Verfiy owner of message
    if(message.recipient.toString() !== userId){
        throw new Response('Unauthorized', { status: 401 });
    }

    message.read = !message.read;
    revalidatePath('/messages', 'page');
    await message.save();
    return message.read;
}

export default markMessageAsRead;