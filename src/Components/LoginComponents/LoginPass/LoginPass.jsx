import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPass.scss";
import Logo from "../../../image/white-logo.png";

function LoginPass() {
    const navigate = useNavigate();

    const credentials = useMemo(
        () => ({ userName: "admin", password: "1122334455" }),
        []
    );

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        setError("");

        const normalizedUserName = userName.trim();

        if (
            normalizedUserName === credentials.userName &&
            password === credentials.password
        ) {
            localStorage.setItem("session-login", "true");
            navigate("/", { replace: true });
            return;
        }

        setError("İstifadəçi adı və ya şifrə yanlışdır.");
    };

    return (
        <div className="loginpass-wrapper">
            <div className="loginpass-container">
                <div className="info-side">
                    <div className="logo-box">
                        <img src={Logo} alt="indo.az logo" />
                    </div>
                    <h2>Yaxşılıq etmək birgə daha asan</h2>
                    <p className="description">
                        Hər bir ianə bir ümiddir. Birlikdə daha çox insana kömək edə bilərik
                    </p>

                </div>

                <div className="form-side">
                    <div className="auth-cardd">
                        <h3>Çox yaxında</h3>
                        {/* <p className="subtitle"></p> */}
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <label>İstifadəçi adı*</label>
                                <div className="input-field">
                                    <input
                                        type="text"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        autoComplete="username"
                                        placeholder="..."
                                        aria-label="userName"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Şifrə*</label>
                                <div className="input-field">
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        autoComplete="current-password"
                                        placeholder="..."
                                        aria-label="password"
                                    />
                                </div>

                                {error ? <span className="error-text">{error}</span> : null}
                            </div>

                            <button className="submit-btn" type="submit">
                                Daxil ol
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPass;
