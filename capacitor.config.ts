import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'mini-manga',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    url: 'http://localhost:5173/',
    "cleartext": true
  }
};

export default config;
