
import './login1.css'


    function Login1() {

    return (
        <>
        <div>
            <div>
                <h3 className="text-center text-black">Userlogin</h3>
            </div>
            <br></br>
            <div className="container text-center">
                <form class="div">
                    <i class="cla" class="fas fa-user"></i><input  type="text" id=""  placeholder="Name"></input>
                    <br></br>
                    <br></br>
                    <i class="log" class="fas fa-lock"></i><input type="password" id=""  placeholder="Password"></input>
                    <br></br>
                    <br></br>

                    <button class="b">Login</button>

                </form>
                
            </div>
            
        </div>

        </>
    )
}

export default Login1

