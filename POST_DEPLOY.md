# Post-Deploy Checklist

## Environment Setup
- [ ] Copy `.env.example` to `.env.local`
- [ ] Set `NEXT_PUBLIC_BACKEND_BASE_URL` to production API URL
- [ ] Set `NEXT_PUBLIC_LIFF_ID` to production LIFF ID
- [ ] Set `NEXT_PUBLIC_SITE_URL` to production domain

## Security
- [ ] Verify CORS settings on backend
- [ ] Enable rate limiting
- [ ] Set up error monitoring (e.g., Sentry)
- [ ] Test admin route protection
- [ ] Verify token expiration handling

## Testing
- [ ] Run all unit tests
- [ ] Test LIFF initialization
- [ ] Test booking flow end-to-end
- [ ] Test admin authentication
- [ ] Test responsive design
- [ ] Verify form validations
- [ ] Check error handling

## Performance
- [ ] Run Lighthouse audit
- [ ] Verify bundle size
- [ ] Check image optimizations
- [ ] Test loading states
- [ ] Verify API caching

## LINE Integration
- [ ] Configure LINE Login
- [ ] Set LIFF endpoint URLs
- [ ] Test LINE profile retrieval
- [ ] Verify deep linking

## Monitoring
- [ ] Set up application monitoring
- [ ] Configure logging
- [ ] Set up uptime monitoring
- [ ] Set up performance monitoring

## Backup & Recovery
- [ ] Set up automated backups
- [ ] Document recovery procedures
- [ ] Test backup restoration

## Documentation
- [ ] Update API documentation
- [ ] Document deployment process
- [ ] Add troubleshooting guides
- [ ] Update user guides

## Launch
- [ ] Create maintenance page
- [ ] Set up SSL certificate
- [ ] Configure DNS
- [ ] Test CDN configuration
- [ ] Verify production build
