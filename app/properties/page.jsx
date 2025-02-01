import PropertyCard from '@/components/PropertyCard';
import connectedDB from '@/config/database';
import Property from '@/models/Property';
import Pagingation from '@/components/Pagination';

const PropertiesPage = async ({ searchParams }) => {

    await connectedDB();
    // Destructure searchParams after ensuring it's available
    const searchParam = await searchParams;

    const page = parseInt(searchParam?.page) || 1;
    const pageSize = parseInt(searchParam?.pageSize) || 9;

    const skip = (page - 1) * pageSize;
    const total = await Property.countDocuments({});

    const properties = await Property.find({}).skip(skip).limit(pageSize);

    // Calculate the total number of pages
    const showPagination = total > pageSize;

    return (
        <section className='px-4 py-6'>
            <div className='container-xl lg:container m-auto px-4 py-6'>
                {properties.length === 0 ? (
                    <p className='text-center text-lg font-bold text-gray-600'>No properties found.</p>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {properties.map((property) => (
                            <PropertyCard key={property._id} property={property} />
                        ))}
                    </div>
                )}
                {showPagination && (
                    <Pagingation
                        page={parseInt(page)}
                        pageSize={parseInt(pageSize)}
                        totalItems={total}
                    />
                )}                
            </div>
        </section>
    );
}

export default PropertiesPage;