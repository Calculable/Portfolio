---
{
  "title": "Pin Puma Privacy Policy",
  "source": "https://www.jan-huber.ch/pin-puma/privacy-policy",
  "path": "/pin-puma/privacy-policy",
  "seo": [
    {
      "property": "og:title",
      "content": "Pin Puma Privacy Policy"
    },
    {
      "property": "og:type",
      "content": "website"
    },
    {
      "name": "twitter:card",
      "content": "summary"
    }
  ],
  "lang": "en",
  "canonicalPath": "/pin-puma/privacy-policy"
}
---

# Pin Puma — Privacy Policy

Last updated: September 23, 2026.

Pin Puma is a personal, non-commercial project for saving places and planning visits. It is free and contains no advertising or third-party analytics. We do not operate a server that receives your place library. However, some features communicate directly with Apple and other service providers. This policy explains those connections.

## Your saved places and photos

The app stores your places, coordinates, titles, favorites, photos, source links, stations and saved travel-time information on your device. Imported photos may contain location metadata, which the app reads locally to locate the place. On macOS, the app may also save the path to an imported file. Your home/departure station and app preferences are stored locally.

When iCloud is available for the app, Apple’s CloudKit service synchronizes your library, including saved photos and coordinates, in your private iCloud database across your devices. Pin Puma does not provide a public sharing feed. Apple processes iCloud data under its own terms and [privacy policy](https://www.apple.com/legal/privacy/). Your device and iCloud settings determine whether synchronization is available.

If you export a backup, the archive contains your saved place information and images. You choose where to save or share it; the recipient or storage provider may then have access to it.

## Location access

Pin Puma requests permission to use your current location for nearby-place features. You can deny or revoke this permission in your device settings. The app does not request continuous background location tracking. Coordinates you save or import can still be used for maps and station searches even when device-location permission is off.

## External services

When your device connects to an external service, that provider receives the request and technical information such as your IP address. The following features send the information needed to fulfil your request:

- **Apple Maps:** In-app maps use Apple’s MapKit. Displaying a map requests map content for the viewed area from Apple. Opening Apple Maps passes the selected destination to that app. See [Apple Maps and Privacy](https://www.apple.com/legal/privacy/data/en/apple-maps/).
- **Public transport:** Station-name searches, nearby-station lookups and travel-time updates contact **transport.opendata.ch**, whose service uses timetable data from **search.ch**. Requests can include typed station names, the selected place’s coordinates, your configured departure station, destination station and requested journey time. These are the places involved in your search, not necessarily your current device location. See the [Transport API](https://transport.opendata.ch/) and [search.ch privacy information](https://search.ch/privacy).
- **Flickr imports:** When you import a Flickr link, the app sends the photo identifier and your configured Flickr API key to Flickr and may download the photo from Flickr’s image servers. The imported title, coordinates, source link and image are saved in your library and may sync through iCloud. Your key is stored in Apple Keychain and can synchronize through iCloud Keychain when enabled. It is sent to Flickr to make API requests; it is not sent to a Pin Puma server. You can remove it in Settings. See [Flickr’s privacy policy](https://www.flickr.com/help/privacy).
- **Komoot imports:** When you import a supported Komoot link, the app requests that webpage, reads its place metadata and may download associated images from the image hosts referenced by the page. The title, coordinates, source link and downloaded images are saved in your library and may sync through iCloud. The app does not ask for your Komoot password. See [Komoot’s privacy policy](https://www.komoot.com/privacy).
- **External map and journey links:** Opening Google Maps or swisstopo passes the selected coordinates to the chosen app or website. Opening SBB passes the departure and destination. These services handle subsequent activity under their own policies. Importing coordinates from a supported map.geo.admin.ch link is performed locally; it does not itself request map data. See [Google’s privacy policy](https://policies.google.com/privacy), [geo.admin.ch](https://www.geo.admin.ch/) and [SBB’s privacy policy](https://www.sbb.ch/en/meta/legallines/data-protection.html).

Opening an original source link or the privacy-policy link also connects to that website through your browser. Its hosting, logging and cookie practices then apply. The app does not send your full place library to these external services.

“Images Nearby” sends the selected place’s coordinates and the configured Flickr API key to Flickr to retrieve public photos within the surrounding area. Displaying those photos requests images from Flickr’s image servers. The selected place is not necessarily your current device location.

## Retention and your choices

Saved places remain in your library until you remove them. Deleted places stay in Recently Deleted until permanently deleted there. Changes can synchronize through iCloud. Removing a Flickr key stops future key-based requests but does not delete previously imported places or photos. Exported archives, provider logs and device or cloud backups have their own retention rules and are not removed by deleting a place in the app.

You can edit or delete saved places, remove the Flickr key, manage iCloud in your device settings, revoke location access, and choose not to use external import or lookup features. Apple and the other providers may process information in countries outside your country of residence under their own privacy policies and safeguards.

## Contact and support

The developer is responsible for Pin Puma’s app functionality and support. If you contact us through the [contact form](/pin-puma/contact), we receive the name, email address and message you submit so we can respond. The website’s form provider, Basin, processes that submission. This is separate from your place library; please do not include API keys or sensitive location information in support messages.

For privacy questions or requests to access, correct or delete personal information you have provided to us, use the [contact form](/pin-puma/contact). Depending on applicable law, you may also have rights to object, restrict processing, request portability or complain to a data-protection authority. Requests concerning information held by Apple or another external provider should also be directed to that provider.
