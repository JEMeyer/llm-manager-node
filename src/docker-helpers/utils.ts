import { execSync } from 'child_process';

// Function to get the host port mapped to a specific container port
export function getMappedPort(containerName: string, containerPort: number) {
  try {
    // Execute the docker port command
    const command = `docker port ${containerName} ${containerPort}`;
    const output = execSync(command).toString().trim();

    // Extract the host port from the output
    const hostPort = output.split(':')[1];
    return hostPort;
  } catch (error) {
    console.error('Error getting mapped port:', error);
    return null;
  }
}
