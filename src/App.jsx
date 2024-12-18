import { useState } from "react";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password, rememberMe });
    };

    return (
        <div className="flex min-h-screen">
            {/* Левая часть с уменьшенным изображением */}
            <div className="w-1/2 bg-gray-200 flex items-center justify-center">
                <img
                    src="/src/assets/girlimg.png"
                    alt="Placeholder"
                    className="object-cover max-w-[80%] max-h-[80%] rounded-lg shadow-lg"
                />
            </div>

            {/* Правая часть с формой логина */}
            <div className="w-1/2 flex items-center justify-center bg-white">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
                >
                    <h1 className="text-2xl font-bold mb-2 text-gray-800 flex items-center">
                        Welcome 👋
                    </h1>
                    <p className="text-gray-500 mb-6">Please login here</p>

                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Email Address
                    </label>
                    <input
                        type="email"
                        placeholder="robertfox@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2 mb-4 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                    />

                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="••••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-4 py-2 mb-4 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                    />

                    <div className="flex items-center justify-between mb-6">
                        <label className="flex items-center text-sm text-gray-600">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                            />
                            Remember Me
                        </label>
                        <a href="#" className="text-sm text-indigo-500 hover:underline">
                            Forgot Password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-200"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
