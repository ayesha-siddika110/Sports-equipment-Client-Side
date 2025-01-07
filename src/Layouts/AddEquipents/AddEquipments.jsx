import React, { useContext } from 'react';
import { AuthContext } from '../../componants/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const AddEquipments = () => {
    const { user, darkMode } = useContext(AuthContext)

    const handleEquipments =(e)=>{
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
        
        const allvalues = {userName, email, itemName, image, category, price, rating, customization, time, stock,description}
        // console.log(allvalues);
        fetch('https://sports-equipments-server-three.vercel.app/sportsEquipments',{
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(allvalues)

        })
        .then(res=> res.json())
        .then(data=> {
            // console.log(data);
            if(data.insertedId){
                toast.success('equipment added successfully')
            }
            form.reset()
            
        })
        
        
        
    }
    return (
        <div className={`${darkMode && 'bg-[#0d0631] '}`}>
            <div className='bg-slate-400 h-40 flex flex-col text-center text-white items-center justify-center'>
                <h1 className='text-4xl'>Add Sports Equipments Here</h1>
                

            </div>
            <form onSubmit={handleEquipments} className="card-body grid lg:grid-cols-2 grid-cols-1 w-[80%] m-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Your Name</span>
                    </label>
                    <input type="text" defaultValue={user?.displayName} placeholder="enter Item name" name='username' className="input input-bordered" readOnly required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Your email</span>
                    </label>
                    <input type="text" defaultValue={user?.email} name='email' className="input input-bordered" readOnly required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Item Name</span>
                    </label>
                    <input type="text" name="name" placeholder="enter Item name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Image</span>
                    </label>
                    <input type="text" name='image' placeholder="enter Image URL" className="input input-bordered" required />
                </div>
                <div className='form-control '>
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Select Category</span>
                    </label>

                    <select name='category' className="select select-ghost select-bordered w-full bg-white">
                        <option disabled selected>category</option>
                        <option>football</option>
                        <option>Cricket</option>
                        <option>tenisball</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Price</span>
                    </label>
                    <input type="text" name='price' placeholder="enter Equipment price" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Rating</span>
                    </label>
                    <input type="text" name='rating' placeholder="Rating US" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">customization</span>
                    </label>
                    <input type="text" name='customization' placeholder="enter bat with extra grip, hit paper etc" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Processing Time</span>
                    </label>
                    <input type="text" name='time' placeholder="enter delivery time" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Stock Status</span>
                    </label>
                    <select name='stock' className="select select-bordered w-full">
                        <option disabled selected>Select Stock</option>
                        <option>available</option>
                        <option>Unavailable</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label font-semibold">
                        <span className="label-text text-lg">Description</span>
                    </label>
                    <textarea name='description' type="text" placeholder="enter description" className="input input-bordered" required />
                </div>


                <div className="form-control mt-6">
                    <p></p>
                    <button className="py-3 rounded-md bg-slate-600 text-white">Add  Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddEquipments;