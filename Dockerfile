# Use an official Ubuntu as a parent image
FROM ubuntu:20.04

# Set environment variables to avoid prompts during installation
ENV DEBIAN_FRONTEND=noninteractive

# Update and install dependencies
RUN apt-get update && apt-get install -y \
    wget \
    gnupg \
    software-properties-common \
    openjdk-11-jdk \
    unzip \
    && rm -rf /var/lib/apt/lists/*

# Add Chromia's repository and install Rell tools (replace with actual URLs)
RUN wget -qO - https://ppa.chromia.com/key.gpg | apt-key add - \
    && add-apt-repository "deb http://ppa.chromia.com/ stable main" \
    && apt-get update \
    && apt-get install -y rell

# Set the working directory
WORKDIR /app

# Copy the current directory contents into the container
COPY . /app

# Expose any necessary ports (e.g., 7740)
EXPOSE 7740

# Run the Rell node (adjust command as needed)
CMD ["rell", "run"]
