# Use lightweight OpenJDK base
FROM openjdk:17-jdk-slim

# Create app directory
WORKDIR /app

# Copy JAR into container
COPY build/libs/demo-0.0.1-SNAPSHOT.jar app.jar

# Expose app port
EXPOSE 8080

# Start the app
ENTRYPOINT ["java", "-jar", "app.jar"]
