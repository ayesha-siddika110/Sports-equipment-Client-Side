import React, { useContext } from 'react';
import { AuthContext } from '../../componants/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import banner from '../../assets/banner-small.jpg'

const AddEquipments = () => {
    const { user, darkMode } = useContext(AuthContext)

    const handleEquipments = (e) => {
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
        // console.log(allvalues);
        fetch('https://sports-equipments-server-three.vercel.app/sportsEquipments', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(allvalues)

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    toast.success('equipment added successfully')
                }
                form.reset()

            })



    }
    return (
        <div className={`${darkMode && 'bg-[#0d0631] '}`}>
            <div
                style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover' }}
                className=' h-52 flex flex-col text-center text-black items-center justify-center'>
                <h1 className='text-4xl'>Add Sports Equipments Here</h1>
                <p> Whether you're an amateur or a professional, choosing the right sports gear tailored to your needs is key to maximizing your potential and enjoying the game.</p>

            </div>
            <form onSubmit={handleEquipments} className="card-body  w-[80%] m-auto py-20">
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-6'>
                    <div className="form-control">
                        <label className="label font-semibold">
                            <span className={`text-lg  ${darkMode && 'text-white font-normal '}`}>Your Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} placeholder="enter Item name" name='username' className={`${darkMode && '' }input input-bordered `} readOnly required />
                    </div>
                    <div className="form-control">
                        <label className="label font-semibold">
                            <span className={`text-lg  ${darkMode && 'text-white font-normal '}`}>Your email</span>
                        </label>
                        <input type="text" defaultValue={user?.email} name='email' className="input input-bordered" readOnly required />
                    </div>

                    <div className="form-control">
                        <label className="label font-semibold">
                            <span className={`text-lg  ${darkMode && 'text-white font-normal '}`}>Item Name</span>
                        </label>
                        <input type="text" name="name" placeholder="enter Item name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label font-semibold">
                            <span className={`text-lg  ${darkMode && 'text-white font-normal '}`}>Image</span>
                        </label>
                        <input type="text" name='image' placeholder="enter Image URL" className="input input-bordered" required />
                    </div>
                    <div className='form-control '>
                        <label className="label font-semibold">
                            <span className={`text-lg  ${darkMode && 'text-white font-normal '}`}>Select Category</span>
                        </label>

                        <select name='category' className="select select-ghost select-bordered w-full bg-white">
                            <option disabled selected>category</option>
                            <option>football</option>
                            <option>Cricket</option>
                            <option>tenisball</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label font-semibold">
                            <span className={`text-lg  ${darkMode && 'text-white font-normal '}`}>Price</span>
                        </label>
                        <input type="text" name='price' placeholder="enter Equipment price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label font-semibold">
                            <span className={`text-lg  ${darkMode && 'text-white font-normal '}`}>Rating</span>
                        </label>
                        <input type="text" name='rating' placeholder="Rating US" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label font-semibold">
                            <span className={`text-lg ${darkMode && 'text-white font-normal '}`}>customization</span>
                        </label>
                        <input type="text" name='customization' placeholder="enter bat with extra grip, hit paper etc" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label font-semibold">
                            <span className={`text-lg  ${darkMode && 'text-white font-normal '}`}>Processing Time</span>
                        </label>
                        <input type="text" name='time' placeholder="enter delivery time" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label font-semibold">
                            <span className={`text-lg  ${darkMode && 'text-white font-normal '}`}>Stock Status</span>
                        </label>
                        <select name='stock' className="select select-bordered w-full">
                            <option disabled selected>Select Stock</option>
                            <option>available</option>
                            <option>Unavailable</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label font-semibold">
                            <span className={`text-lg  ${darkMode && 'text-white font-normal '}`}>Description</span>
                        </label>
                        <textarea name='description' type="text" placeholder="enter description" className="input input-bordered" required />
                    </div>
                </div>


                <div className="form-control mt-6">
                    <button className="py-3 lg:w-[50%] m-auto rounded-md bg-sky-600 text-white">Add  Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddEquipments;