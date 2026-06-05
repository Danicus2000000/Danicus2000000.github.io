<template>
  <footer class="footer">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-6 col-sm-4">
          <a href="/">
            <img :src="logo" alt="Logo" />
          </a>
        </div>
        <div class="col-12 col-sm-8 text-center text-sm-end">
          <div class="social-icon">
            <a href="https://github.com/Danicus2000000">
              <img :src="navIcon2" alt="GitHub" />
            </a>
          </div>
          <div class="social-icon">
            <a href="https://www.linkedin.com/in/daniel-bulman-0b58161b6/">
              <img :src="navIcon1" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col badge-icon">
          <div class="badge-icon">
            <img :src="cert2" title="Microsoft Developer Associate (AZ-900)" />
            <img
              :src="cert1"
              title="Microsoft Certified: Azure AI Engineer Associate (AZ-102) Microsoft Certified: Azure Developer Associate (AZ-204)"
            />
            <img
              :src="cert4"
              title="Microsoft DevOps Engineer Expert (AZ-400)"
            />
            <img :src="cert3" title="Github Copilot Certification" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import logo from "../assets/img/logo.webp";
import navIcon1 from "../assets/img/linkedinIcon.svg";
import navIcon2 from "../assets/img/github-mark.svg";
import cert1 from "../assets/img/microsoft-certified-associate-badge.svg";
import cert2 from "../assets/img/microsoft-certified-900-badge.svg";
import cert3 from "../assets/img/github-copilot.svg";
import cert4 from "../assets/img/microsoft-certified-expert-badge.svg";
</script>
