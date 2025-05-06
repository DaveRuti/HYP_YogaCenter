<script setup>

</script>

<template>
  <footer>
    <div class="footer-top">
      <div class="footer-column">
        <h3>School</h3>
        <ul>
          <li><a href="#">Teachers</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Regulation</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Content</h3>
        <ul>
          <li><a href="#">Newsletter</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Support</h3>
        <ul>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Account</h3>
        <ul>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-logo">
        <div class="logo">
          <svg width="40" height="40" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.7288 4.2429C10.3855 1.8996 6.58624 1.8996 4.24293 4.24291C1.89963 6.58621 1.89963 10.3855 4.24293 12.7288L27.4035 35.8893C29.7468 38.2326 33.546 38.2326 35.8894 35.8893C38.2327 33.546 38.2327 29.7468 35.8894 27.4035L12.7288 4.2429Z" fill="#7E7E7E"/>
            <path d="M60.7571 12.7288C63.1004 10.3855 63.1004 6.58624 60.7571 4.24293C58.4138 1.89963 54.6145 1.89963 52.2712 4.24294L4.24297 52.2712C1.89966 54.6145 1.89966 58.4138 4.24297 60.7571C6.58628 63.1004 10.3855 63.1004 12.7288 60.7571L60.7571 12.7288Z" fill="#7E7E7E"/>
            <path d="M32.5001 13.821C35.6437 13.821 38.192 11.2726 38.192 8.12898C38.192 4.98539 35.6437 2.43701 32.5001 2.43701C29.3565 2.43701 26.8081 4.98539 26.8081 8.12898C26.8081 11.2726 29.3565 13.821 32.5001 13.821Z" fill="#7E7E7E"/>
          </svg>
          <span>InnerFlow</span>
        </div>
        <div class="social-icons">
          <a href="#"><img src='../assets/twitter.png' alt="Twitter"></a>
          <a href="#"><img src='../assets/instagram.png' alt="Instagram"></a>
          <a href="#"><img src='../assets/facebook.png' alt="Facebook"></a>
          <a href="#"><img src='../assets/telegram.png' alt="Telegram"></a>
        </div>
      </div>
      <div class="footer-contacts">
        Have any question or feedback? Reach out below
        <h1>support@innerflow.com</h1>
        <br>
        Give us a call
        <h1>+39 000 000 0000</h1>
      </div>
    </div>
    <div class="footer-legal">
      <p>&copy; 2023 InnerFlow. <br> All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  font-family: Nunito, sans-serif;
}

footer {
  background-color: #F8F8F6;
  padding: 10px 20px;
  bottom : 0;
  position: relative;
  width: 100%;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #7E7E7E;
  font-size: 35px;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px 0;
  margin-left: 20px;
  margin-bottom: 10px;
}

.footer-column {
  flex: 1 1 200px;
  margin: 10px;
  text-align: left;
}

.footer-column h3 {
  color: black;
  font-weight: bold;
  margin-bottom: 15px;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column ul li {
  margin-bottom: 10px;
}

.footer-column ul li a {
  text-decoration: none;
  color: #333;
  background: none;
}

.footer-column ul li a:hover {
  text-decoration: underline;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-top: 20px;
  margin-bottom: 50px;
}

.footer-logo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
  margin-bottom: 50px;
}

.logo {
  margin-bottom: 10px;
}

.social-icons a {
  width: 120px;
  margin-right: 7px;
  background: none;
}

.social-icons img {
  width: 40px;
  height: auto;
}

.footer-contacts {
  margin-top: 5px;
  color: black;
  font-weight: bold;
  margin-right: 300px;
  text-align: left;
}

.footer-contacts h1{
  font-size: 30px;
  margin-top: 1px;
}

.footer-legal{
  text-align: left;
  margin-top: 20px;
  color: #7E7E7E;
  margin-left: 20px;
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .footer-top, .footer-bottom {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-column {
    flex: 1 1 100%;
    margin: 10px 0;
  }

  .footer-logo {
    margin: 0 0 50px 0;
    align-items: center;
    text-align: center;
  }

  .footer-contacts{
    margin: 0 0 50px 0;
    text-align: center;
  }
}
</style>