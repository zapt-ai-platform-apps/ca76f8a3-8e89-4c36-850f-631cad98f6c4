# B-Line

B-Line is a digital platform that connects individuals and professionals, offering a variety of services such as buying and selling products, ordering deliveries, publishing announcements, accessing training programs, discovering events, sharing tips, and more.

## User Journeys

1. [Explore Bon Coin](docs/journeys/explore-bon-coin.md) - Find products and services near you.
2. [Order a Delivery](docs/journeys/order-delivery.md) - Order products or services and get them delivered.
3. [Post a Service Announcement](docs/journeys/post-service-announcement.md) - Publish announcements or find offers.
4. [Access Training Programs](docs/journeys/access-training.md) - Browse and enroll in training courses.
5. [Discover Events](docs/journeys/discover-events.md) - Find out about events happening in your area.
6. [Share Tips](docs/journeys/share-tips.md) - Share and discover useful tips.
7. [Use Intello](docs/journeys/use-intello.md) - Share and access intellectual productions.
8. [Online Payments](docs/journeys/online-payments.md) - Pay for services securely online.
9. [Use Geolocation](docs/journeys/use-geolocation.md) - Find businesses and services near you.
10. [Use Translation and Chat](docs/journeys/use-translation-and-chat.md) - Communicate with others in different languages.

## External APIs and Services Used

- **Geolocation API**: To find businesses and services near the user.
- **Payment Gateway API**: To process online payments.

## Environment Variables

The application uses the following environment variables:

- `GOOGLE_MAPS_API_KEY` - API key for Google Maps Geocoding API.
- `STRIPE_API_KEY` - Secret API key for Stripe payment processing.

Please add these variables to a `.env` file in the root directory.
