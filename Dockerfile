# base image
FROM node:12.2.0 as build

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install
RUN npm install -g @angular/cli@11.2.5

# add app
COPY . .

# generate build
RUN ng build --prod --base-href /food/ --output-path=dist

############
### prod ###
############

# base image
FROM nginx
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# copy artifact build from the 'build environment'
COPY --from=build /app/dist /usr/share/nginx/html

# expose port 80
EXPOSE 80
