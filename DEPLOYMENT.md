# Deployment Configuration

This project is configured to work with different environments using environment variables.

## Environment Setup

### Production Environment
- Uses `.env.production` file
- API Base URL: `http://13.60.183.13:8000`
- Build with: `npm run build` (automatically uses production mode)

## Environment Files

```
VITE_API_BASE_URL=http://13.60.183.13:8000
```

## Build Commands

```bash
# Development build (for testing production locally)
npm run build:dev

# Production build (for deployment)
npm run build
```

## API Configuration

The project uses a centralized API configuration in `src/lib/api.ts`:

- `API_BASE_URL`: Automatically set based on environment
- `buildApiUrl()`: Helper function to build complete API URLs
- `API_ENDPOINTS`: Pre-defined endpoints for all API calls

## Deployment Steps

1. **Build for Production**:
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting service

3. **Environment Variables**: Make sure your hosting service has the production environment variables set

## API Endpoints

All API calls now use the centralized configuration:

- User registration: `API_ENDPOINTS.USER_CREATE`
- Email verification: `API_ENDPOINTS.USER_VERIFY_EMAIL`
- User login: `API_ENDPOINTS.USER_LOGIN`
- Equipment creation: `API_ENDPOINTS.EQUIPMENT_CREATE`
- Gear items: `API_ENDPOINTS.GEAR_ITEMS`
- And more...

## Debugging

The application includes debug logs to verify the correct API URL is being used:

- Check browser console for: `API_BASE_URL: http://13.60.183.13:8000`
- Check browser console for: `Environment: production`

## Important Notes

- **Always use `npm run build` for production deployment** - this automatically uses production mode
- The build process will show debug logs in the console showing which API URL is being used
- Check the browser console to verify the correct API URL is being used
- If you see localhost URLs in production, make sure you're using `npm run build` and not `npm run build:dev`

## Benefits

- ✅ Easy environment switching
- ✅ Centralized API configuration
- ✅ No hardcoded URLs
- ✅ Type-safe API endpoints
- ✅ Easy deployment to different servers
- ✅ Debug logs to verify configuration 