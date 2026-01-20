import { connectToDatabase as connectShared, disconnectDatabase as disconnectShared } from "@repo/database-mongo";

export async function connectToDatabase() {
  let uri = process.env.MONGODB_URI || process.env.MONGO_CLUSTER || "mongodb://localhost:27017/dreamdot";

  // CRITICAL: Force dreamdot database by replacing whatever database name is in URI
  const uriParts = uri.split('?');
  const baseUri = uriParts[0];
  const queryParams = uriParts[1] ? '?' + uriParts[1] : '';

  // Strip any existing database name after the last slash
  const lastSlashIndex = baseUri.lastIndexOf('/');
  const hostPort = baseUri.substring(0, lastSlashIndex);

  // Force dreamdot
  uri = hostPort + '/dreamdot' + queryParams;

  console.log(`🎯 FORCING MongoDB to use database: dreamdot`);

  await connectShared(uri);
  return {};
}

export async function closeDatabaseConnection() {
  await disconnectShared();
}
