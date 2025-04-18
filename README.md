============Daily Motivation App==================

A simple Ionic Angular app that shows daily motivational quotes. Users
can:

Pick quote categories (Inspiration, Life, Productivity, Success, Health)

Get a new random quote by tapping a button

Save quotes to favorites

See history of quotes

Change settings for notifications and categories

===============Usage=================

Open the app in a browser or on a device.

On the Home tab, tap Refresh Quote to see a new quote.

Tap Add to favorites to save a quote.

Go to History tab to see past quotes.

In Settings, pick your favorite categories and toggle favorites display.

===============Project Structure===============

src/ app/ tab1/ \# Home tab (quotes, refresh, favorites) tab2/ \#
History tab (past quotes) tab3/ \# Settings tab (notifications,
categories) data.service.ts \# Service for saving quotes and settings
tabs/ \# Tab bar layout and routing

=============Data Service=================

Saves chosen categories and favorites in memory.

Provides addItem() and getItems() methods for history.

