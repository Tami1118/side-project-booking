<template>
  <div class="bg-primary">
    <div class="container mx-auto px-4 xl:px-0">
      <div class="py-4 flex justify-between">
        <ul class="flex gap-4">
          <li><router-link class="text-white" to="/admin/rooms">房型管理</router-link></li>
          <li><router-link class="text-white" to="/admin/orders">訂單管理</router-link></li>
          <li><router-link class="text-white" to="/admin/culinary">餐飲管理</router-link></li>
          <li><router-link class="text-white" to="/admin/news">消息管理</router-link></li>
          <li><router-link class="text-white" to="/room">前台房型</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>