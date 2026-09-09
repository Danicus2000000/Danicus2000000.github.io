<template>
  <footer class="footer">
    <div class="container">
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
import cert1 from "../assets/img/microsoft-certified-associate-badge.svg";
import cert2 from "../assets/img/microsoft-certified-900-badge.svg";
import cert3 from "../assets/img/github-copilot.svg";
import cert4 from "../assets/img/microsoft-certified-expert-badge.svg";
</script>
