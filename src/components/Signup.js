import React from 'react'

const Signup = () => {
    return (
        <div className='card my-4 mx-auto col-md-5'>
            <div className='card-body'>
                <h3 className='card-title'>Join iNotebook</h3>
                <p className='card-subtitle'>Start your note taking journey now!</p>
                <form className='my-3'>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name="name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="c-password" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="c-password" name="c-password" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="show-pass" name="show-pass" />
                        <label className="form-check-label" htmlFor="show-pass">Show Password</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Signup
