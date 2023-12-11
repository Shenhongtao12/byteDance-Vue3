<template>
    <div>
        跳转中...
    </div>
</template>
<script setup>
import { onMounted } from "vue";
import { useRouter } from 'vue-router';
const router = useRouter()


onMounted(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const userName = searchParams.get('userName');
    const phone = searchParams.get('phone');

    if (userName && phone) {
        localStorage.setItem('qcyUserInfo', JSON.stringify({
            userName: userName,
            phone: phone
        }));
    } else {
        localStorage.removeItem('qcyUserInfo');
    }

    router.push("/")
    
})
</script>