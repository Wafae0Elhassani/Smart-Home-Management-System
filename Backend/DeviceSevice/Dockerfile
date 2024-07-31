FROM openjdk:17-jdk-alpine
WORKDIR /deviceApp
COPY target/*.jar deviceApp.jar
ENTRYPOINT ["java", "-jar", "/deviceApp/deviceApp.jar"]
