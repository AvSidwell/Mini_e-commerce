<template>

   <section class="container forms ">
           
            <!-- Signup Form -->
             <div class="form signup">
                <div class="form-content">
                    <h4>Signup</h4>
                    <form action="#">
                        <div class="field input-field">
                            <input type="text" placeholder="Full Name" class="input">
                        </div>
                        <div class="field input-field">
                            <input type="email" placeholder="Email" class="input">
                        </div>
                        <div class="field input-field">
                            <input type="password" placeholder="Create password" class="password">
                        </div>
                        <div class="field input-field">
                            <input type="password" placeholder="Confirm password" class="password">
                            <i class='bx bx-hide eye-icon'></i>
                        </div>
                        <div class="field button-field">
                            <button>Signup</button>
                        </div>
                    </form>
                    
                    <div class="form-link">
                        <span>You have an account <a href="#" class="link login-link">Login in</a></span>
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

.form.signup{
    opacity: 0;
    pointer-events: none;
}
.forms.show-signup .form.signup{
    opacity: 1;
    pointer-events: auto;
}
.forms.show-signup .form.login{
    opacity: 0;
    pointer-events: none;
}
h4{
    font-size: 1.75rem;
    font-weight: 600;
    color: #2e56c3;
    text-align: center;
}
form{
    margin-top: 1.875rem;
}
.form .field{
    position: relative;
    height: 3.125rem;
    width: 100%;
    margin-top: 1.25rem;
    border-radius: 0.375rem;
}
.field input,
.field button{
    height: 100%;
    width: 100%;
    border: none;
    font-size: 1rem;
    font-weight: 400;
    border-radius: 0.375rem;
}
.field input{
    outline: none;
    padding: 0 0.938rem;
    border: 0.063rem solid#CACACA;
}
.field input:focus{
    border-bottom-width: 0.125rem;
}
.eye-icon{
    position: absolute;
    top: 50%;
    right: 0.625rem;
    transform: translateY(-50%);
    font-size: 1.125rem;
    color: #8b8b8b;
    cursor: pointer;
    padding: 0.313rem;
}
.field button{
    color: #fff;
    background-color: #073156;
    transition: all 0.3s ease;
    cursor: pointer;
}
.field button:hover{
    background-color: #016dcb;
}
.form-link{
    text-align: center;
    margin-top: 0.625rem;
}
.form-link span,
.form-link a{
    font-size: 0.875rem;
    font-weight: 400;
    color: #232836;
}
.form a{
    color: #0171d3;
    text-decoration: none;
}
.form-content a:hover{
    text-decoration: underline;
}
.line{
    position: relative;
    height: 0.063rem;
    width: 100%;
    margin: 2.25rem 0;
    background-color: #d4d4d4;
}
.line::before{
    content: 'Or';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #FFF;
    color: #8b8b8b;
    padding: 0 0.938rem;
}
.field button {
    color: #FFF;
    transition: all 0.3s;
    position: relative;
  }
  .field button span {
    transition: all 0.3s;
  }
  .field button::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border-top-width: 0.063rem;
    border-bottom-width: 0.063rem;
    border-top-style: solid;
    border-bottom-style: solid;
    border-top-color: rgba(255,255,255,0.5);
    border-bottom-color: rgba(255,255,255,0.5);
    transform: scale(0.1, 1);
  }
  .field button:hover span {
    letter-spacing: 0.125rem;
  }
  .field button:hover::before {
    opacity: 1; 
    transform: scale(1, 1); 
  }
  .field button::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.3s;
    background-color: rgba(255,255,255,0.1);
  }
  .field button :hover::after {
    opacity: 0; 
    transform: scale(0.1, 1);
  }
    
</style>