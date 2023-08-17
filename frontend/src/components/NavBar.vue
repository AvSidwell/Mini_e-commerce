<template>
    
 <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">SIDWELLO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="products">Shop</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact">Contact</a>
        </li>
      </ul>
      <span class="navbar-items">
        <a class="nav-link" href="register">Register</a> 
      </span>
      <span class="navbar-items">
       <a class="nav-link" href="login">Login</a> 
      </span>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .navbar {
      background-color:black!important;
      color: white !important;
      box-shadow: 0px 6px 5px 0px whitesmoke;
      height: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 50px;
    }
    .nav-link{
      color: white;
    }

    .navbar-brand {
      color: white;
      font-size: 30px;
      text-decoration-line:line-through;
      font-weight:400;
      font-style: italic;
    }

    .nav-item {
      /* list-style-type: none; */
      margin: 0;
      padding: 0;
      display: flex;
      margin-left: 100px;
      font-size: 1.4rem;
      color: white;
    }
    .nav-item :hover{
      background-color: rgb(204, 186, 202);
      border: 4px solid;
    }

    .navbar-items{
      text-align: center;
      color:white;
      background-color: rgb(146, 50, 109);
      border-radius: 6px;
      width: 58px;
      height: 30px;
      display: flex;
      justify-content: space-between;
      margin-left: 20px;
    }
    .navbar-items :hover{
      background-color: blueviolet;

    }


    @media (max-width: 300px) {
  .navbar {
    flex-direction: column;
    height: auto;
    padding: 0 10px;
  }

  .navbar-logo {
    margin-bottom: 10px;
  }

  .navbar-menu li {
    margin: 5px 0;
  }

  .navbar-menu li a {
    font-size: 14px;
    padding: 6px;
  }
}
    </style>