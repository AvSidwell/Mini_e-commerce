<template>
 <section class="container"> 
     <div class="form login flex-container mb-5 fw-bold">
                <div class="form-content ">
                    <h4>Welcome Back</h4>
                    <form action="#">
                        <div class="field input-field">
                            <input type="email" placeholder="Email" class="input">
                        </div>
                        <div class="field input-field">
                            <input type="password" placeholder="Password" class="password">
                            <i class='bx bx-hide eye-icon'></i>
                        </div>
                        <div class="form-link">
                            <a href="#" class="forgot-pass fs-4">Forgot password?</a>
                        </div>
                        <div class="field button-field">
                            <button>Login</button>
                        </div>
                    </form>
                    
                    <div class="form-link">
                        <span>Don't have an account? <a href="Register" class="link signup-link">Signup</a></span>
                    </div>
                </div>
            </div>
 </section>
        
    
</template>

<script>
export default {
    
}
</script>

<style scoped>
.container{
    min-height: 100vh;
    min-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(https://i.postimg.cc/Tw1QFSTG/desktop-wallpaper-novak-djokovic-serbian-tennis-players-atp-neon-atp.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
}

.form{
    padding: 1.875rem;                       
}

.input,.password{
    width: 20rem;
    height: 4rem;
    margin: 8px;
    border-radius: 8px;
    margin-left: 40px;
    background: rgb(251, 213, 251);
}
.forgot-pass{
    margin-left: 100px;
}
h4{
    text-align: center;
    color: rgb(122, 8, 157);
    font-size: 50px;
    margin-bottom: 40px;
}
span{
    margin-left: 60px;
    color: crimson;
    font-size: 20px;
}
button{
    background-color:rgb(177, 121, 177);
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 90px;
    width: 200px;
    height: 40px;
}
button:hover{
    background-color: blueviolet;
}
    
</style>