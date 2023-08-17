<template>
 <section> 
     <div class="form login flex-container fw-bold">
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
                            <a href="#" class="forgot-pass">Forgot password?</a>
                        </div>
                        <div class="field button-field">
                            <button>Login</button>
                        </div>
                    </form>
                    
                    <div class="form-link">
                        <span>Don't have an account? <a href="#" class="link signup-link">Signup</a></span>
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
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x:center;
    background-size: 40%;
    background-color: #2A2A72; 
    column-gap: 1,875rem;
}
.form{
    position: absolute;
    max-width: 26.875rem;
    width: 100%;
    padding: 1.875rem;
    border-radius:0.375rem;
    background: #ffffffc6;
}
    
</style>