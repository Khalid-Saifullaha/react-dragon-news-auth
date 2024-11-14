import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className=" flex justify-center my-10">
      <div class="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">
          Register your account
        </h2>
        <form class="card-body">
          {/* name input */}
          <div class="form-control">
            <label class="label">
              <span class="label-text">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              class="input input-bordered"
              required
            />
          </div>
          {/* Photo  */}
          <div class="form-control">
            <label class="label">
              <span class="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo-URL"
              class="input input-bordered"
              required
            />
          </div>
          {/* email input */}
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              class="input input-bordered"
              required
            />
          </div>
          {/* password input */}
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              class="input input-bordered"
              required
            />
            <label class="label">
              <a href="#" class="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Already have An Account ?{" "}
          <Link to="/auth/login" className="text-red-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
