<template>
       <footer id="footer-sec">
        <div class="col">
            <div class="logo">
                <p>SIDWELLO</p>
            </div>
        <div class="contact">
            <h4>Contact</h4>
            <p><strong>Address:</strong>Anywhere in Cape Town</p><br>
            <p><strong>Phone:</strong> 021 222 333 4</p>
        </div>
        <div class="hours">
            <h4>Operating hours</h4>
            <p><strong>Mon</strong>: 09:00 - 17:00</p>
            <p><strong>Tue</strong>: 09:00 - 17:00</p>
            <p><strong>Wed</strong>: 09:00 - 17:00</p>
            <p><strong>Thu</strong>: 09:00 - 17:00</p>
            <p><strong>Fri</strong>: 09:00 - 17:00</p>
            <p><strong>Sat</strong>: 09:00 - 15:00</p>
        </div>
            <div class="follow">
                <h4>Folow Us</h4>
                <div class="icon">
                    <i class="fab fa-youtube " style="color: #723cc3;"></i>
                    <i class="fab fa-twitter " style="color: #723cc3;"></i>
                    <i class="fab fa-facebook " style="color: #723cc3;"></i>
                    <i class="fab fa-instagram" style="color: #723cc3;"></i>
                    
                </div>
            </div>

        </div>
        <div class="copyright">
            <p> copyright ©️ made by Xola Bangaza</p>
        </div>
      </footer>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    footer{
    background-color: black;
}

.logo {
      margin-left: 40px;
      margin-top: 40px;
      color:whitesmoke;
      font-size: 50px;
      text-decoration-line:line-through;
      font-weight:400;
      font-style: italic;
    }

.col{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 20px;

}

.follow{
    display: flex;
    flex-direction:column;
    margin-top: 40px;
    color: ghostwhite;
}

.follow .icon{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.contact{
    margin-top: 40px;
    margin-bottom: 40px;
    margin-left: 20px;
    color: whitesmoke;
}

.copyright{
    color:blue;
    padding: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;

}

.hours{
    margin-top: 40px;
    color: whitesmoke;
}

.icon{
    display: flex;
    justify-items: center;
}


    
</style>