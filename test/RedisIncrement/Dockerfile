# We start with the python slim image (slim is a smaller image than python)
FROM python:3.9-slim
# Set our directory 
WORKDIR /app
# Copy our directory
COPY . /app
# Install dependencies
RUN pip install -r ./requirements.txt
# Open the port 80
EXPOSE 80
# Run our code
CMD ["python", "app.py"]
