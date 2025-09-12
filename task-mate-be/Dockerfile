# Stage 1: Build the app
FROM maven:3.9.6-eclipse-temurin-21 AS builder

WORKDIR /app

# Copy pom.xml first (better caching for dependencies)
COPY pom.xml .
RUN mvn dependency:go-offline

COPY src ./src

# Package the app
RUN mvn clean package -DskipTests

# Stage 2: Run the app only
FROM eclipse-temurin:21-jdk

WORKDIR /app

# Copy jar from builder stage
COPY --from=builder /app/target/task-mate-be-0.0.1-SNAPSHOT.jar .

# Expose the default Spring Boot port
EXPOSE 8080

# Run the app
ENTRYPOINT ["java", "-jar", "/app/task-mate-be-0.0.1-SNAPSHOT.jar"]
