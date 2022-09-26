<template>
    <div class="container">
        <div class="menu-bar">
            <img alt="Vue logo" src="../assets/logo.png">
            <a-menu mode="inline" theme="dark">
                <a-menu-item key="1">
                    <router-link class="link" to="/">
                        <template #icon>
                            <PieChartOutlined />
                        </template>
                        <span>Home</span>
                    </router-link>
                </a-menu-item>
                <a-menu-item key="2">
                    <router-link class="link" to="/product">
                        <template #icon>
                            <DesktopOutlined />
                        </template>
                        <span>Product</span>
                    </router-link>
                </a-menu-item>
                <a-menu-item key="3">
                    <template #icon>
                        <InboxOutlined />
                    </template>
                    <span>Todo App</span>
                </a-menu-item>
            </a-menu>
        </div>
        <div class="content">
            <slot />
        </div>
    </div>
</template>
  
<script>
import {
    PieChartOutlined,
    DesktopOutlined,
    InboxOutlined,
} from '@ant-design/icons-vue';
export default {
    name: 'SideBar',
    components: {
        PieChartOutlined,
        DesktopOutlined,
        InboxOutlined,
    },
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

.container {
    display: flex;
    height: 100vh;
    width: 100%;
}

.menu-bar {
    background-color: #001529;
    width: 15%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
}

.content {
    width: 85%;
    margin-left: 15%;
}
</style>
  