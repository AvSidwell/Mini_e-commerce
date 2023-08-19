<template>
   <section class="container forms p-auto">
           
            <!-- Signup Form -->
             <div class="form signup m-auto">
                <div class="form-content  align-items-center">
                    <h4>Signup</h4>
                    <form action="#" class="p-auto">
                        <div class="field input-field m-auto mb-3">
                            <input type="text" placeholder="Full Name" class="input">
                        </div>
                        <div class="field input-field m-auto mb-3">
                            <input type="email" placeholder="Email" class="input">
                        </div>
                        <div class="field input-field m-auto mb-3">
                            <input type="password" placeholder="Create password" class="password">
                        </div>
                        <div class="field input-field m-auto mb-3">
                            <input type="password" placeholder="Confirm password" class="password">
                            <i class='bx bx-hide eye-icon'></i>
                        </div>
                        <div class="field button-field m-auto">
                            <button>Signup</button>
                        </div>
                    </form>
                    
                    <div class="form-link">
                        <span>You have an account <a href="Login" class="link login-link">Login in</a></span>
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

h4{
    font-size: 1.75rem;
    font-weight: 600;
    color: #92129e;
    text-align: center;
}
form{
    margin-top: 1.875rem;
}
.form .field{
    position: relative;
    height: 3.125rem;
    width: 30%;
    margin-top: 1.25rem;

}
.field input,
.field button{
    height: 100%;
    width: 100%;
    border: 5px solid;
    font-size: 1rem;
    font-weight: 400;
    border-radius: 4.375rem;
}
.field input{
    outline: none;
    padding: 0 0.938rem;
    border: 0.063rem solid#d430c6;
}

.eye-icon{
    position: absolute;
    top: 50%;
    right: 0.625rem;
    transform: translateY(-50%);
    font-size: 1.125rem;
    color: #a53939;
    cursor: pointer;
    padding: 0.313rem;
}
.field button{
    color: #fff;
    background-color: #cc69d2;
    transition: all 0.3s ease;
    cursor: pointer;
}
.field button:hover{
    background-color: #ce36ad96;
}
.form-link{
    text-align: center;
    margin-top: 0.625rem;
    margin-bottom: 0.625rem;
}
@media only screen and (max-width: 700px) {
h4 {
        font-size: 1.5rem; 
    }

    form {
        margin-top: 1rem; 
    }

    .form .field {
        width: 80%; 
    }

    .field input,
    .field button {
        height: 2.5rem; 
        font-size: 0.875rem; 
    }

    .field input {
        padding: 0 0.625rem; 
    }

    .eye-icon {
        right: 0.313rem; 
        font-size: 1rem; 
    }

    .form-link {
        margin-top: 0.313rem; 
        margin-bottom: 0.313rem;
    }
}


    
</style>