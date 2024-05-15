// Client-side code (Login.js)
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../Styles/LoginUs.css"; // Import CSS file for styling
import video from '../Images/video.mp4'

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function submit(e) {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8000/", {
                email,
                password
            });

            if (res.data === "exist") {
                history("/", { state: { id: email } });
            } else if (res.data === "notexist") {
                alert("User has not signed up");
            }
        } catch (e) {
            alert("Wrong details");
            console.log(e);
        }
    }

    return (
        <div className="login-container">
            {/* Background Video */}
            <video autoPlay loop muted className="video-background">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Login Form */}
            <div className="login-form">
                <h1 style={{textAlign:'center',color:'black'}}>Login</h1>
                <form>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <button type="submit" onClick={submit} className="button3" >
                        Login
                    </button>
                </form>
                <Link to="/Register">New user?Create Account</Link>
            </div>
        </div>
    );
}

export default Login;
