FROM node-hiprint-pdf:v1

# 设置工作目录
WORKDIR /app

# 设置环境变量
#ENV NODE_ENV prd


# 安装puppeteer依赖
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser
# 设置时区为上海
#ENV TZ=Asia/Shanghai

# 设置语言为中文
#ENV LANG=zh_CN.UTF-8

# 复制项目文件到工作目录
COPY . .

# 暴露容器端口
EXPOSE 3000
# 运行Node.js应用
#CMD ["npm", "run", "start"]
ENTRYPOINT ["./entrypoint.sh"]
