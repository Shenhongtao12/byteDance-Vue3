# 使用 Nginx 作为基础镜像
FROM nginx:latest

# 将自定义的 Nginx 配置文件复制到容器中
COPY nginx.conf /etc/nginx/nginx.conf

# 将静态文件复制到容器中的 Nginx 默认目录
COPY /dist /qinchuangyuan/yulin/html

# 暴露容器的端口
EXPOSE 80

# 启动 Nginx 服务
CMD ["nginx", "-g", "daemon off;"]
