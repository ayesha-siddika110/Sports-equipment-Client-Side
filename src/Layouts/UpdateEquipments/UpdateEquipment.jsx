import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../componants/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const UpdateEquipment = () => {
    const data= useLoaderData()
    // console.log(data);
    const {user} = useContext(AuthContext)

    const handleUpdateEquipments = e => {
        e.preventDefault()
        const form = e.target;
        const userName = form.username.value
        const email = form.email.value
        const itemName = form.name.value
        const image = form.image.value
        const category = form.category.value
        const price = form.price.value
        const rating = form.rating.value
        const customization = form.customization.value
        const time = form.time.value
        const stock = form.stock.value
        const description = form.description.value

        const allvalues = { userName, email, itemName, image, category, price, rating, customization, time, stock, description }

        fetch(`https://sports-equipments-server-three.vercel.app/sportsEquipments/${data?._id}`, {
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(allvalues)
        })
        .then(res=> res.json())
        .then(data=> {
            // console.log(data);
            if(data.modifiedCount>0){
                toast.success('sucessfully updated')
            }
            
            
        })
    }


    return (
        <div>
            <h1 className='text-5xl font-semibold text-center py-6'>Update Information</h1>
            <form onSubmit={handleUpdateEquipments} className="card-body grid grid-cols-1 lg:grid-cols-2 w-[80%] m-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-lg">Your Name</span>
                    </label>
                    <input type="text" defaultValue={user?.displayName} placeholder="enter Item name" name='username' className="input input-bordered" readOnly required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-lg">Your email</span>
                    </label>
                    <input type="text" defaultValue={user?.email} name='email' className="input input-bordered" readOnly required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-lg">Item Name</span>
                    </label>
                    <input type="text" name="name" defaultValue={data?.itemName} placeholder="enter Item name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-lg">Image</span>
                    </label>
                    <input type="text" name='image' defaultValue={data?.image} placeholder="enter Image URL" className="input input-bordered" required />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text font-semibold text-lg">Select Category</span>
                    </label>

                    <select name='category' defaultValue={data?.category} className="select select-ghost select-bordered w-full ">
                        <option disabled selected>category</option>
                        <option>football</option>
                        <option>Cricket</option>
                        <option>tenisball</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-lg">Price</span>
                    </label>
                    <input type="text" name='price' defaultValue={data?.price} placeholder="enter Equipment price" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-lg">Rating</span>
                    </label>
                    <input type="text" name='rating' defaultValue={data?.rating} placeholder="Rating US" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-lg">Customization</span>
                    </label>
                    <input type="text" defaultValue={data?.customization} name='customization' placeholder="enter bat with extra grip, hit paper etc" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-lg">Processing Time</span>
                    </label>
                    <input type="text" name='time' defaultValue={data?.time} placeholder="enter Processing time" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-lg">Stock Status</span>
                    </label>
                    <select name='stock' defaultValue={data?.stock} className="select select-bordered w-full">
                        <option disabled selected>select</option>
                        <option>available</option>
                        <option>unavailable</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-lg">description</span>
                    </label>
                    <textarea defaultValue={data?.description}  name='description' type="text" placeholder="enter description" className="input input-bordered" required />
                </div>


                <div className="form-control mt-6">
                    <p></p>
                    <button className="bg-slate-600 text-white py-3 rounded-lg">Update Equipment</button>
                </div>
            </form>


        </div>
    );
};

export default UpdateEquipment;