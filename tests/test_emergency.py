import pathlib
import re
import unittest

ROOT = pathlib.Path(__file__).resolve().parents[1]


class EmergencyFeatureTests(unittest.TestCase):
    def test_itinerary_loads_emergency_assets_and_page(self):
        html = (ROOT / "index.html").read_text(encoding="utf-8")
        self.assertIn('href="emergency.css"', html)
        self.assertIn('src="emergency-data.js"', html)
        self.assertIn('src="emergency.js"', html)
        self.assertIn('emergency.html', (ROOT / "emergency.js").read_text(encoding="utf-8"))

    def test_all_three_countries_have_verified_call_routes(self):
        data = (ROOT / "emergency-data.js").read_text(encoding="utf-8")
        expected = {
            "SI": {"general": "112", "police": "113", "ambulance": "112", "fire": "112"},
            "AT": {"general": "112", "police": "133", "ambulance": "144", "fire": "122"},
            "HU": {"general": "112", "police": "112", "ambulance": "112", "fire": "112"},
        }
        for country, numbers in expected.items():
            self.assertRegex(data, rf"{country}:\s*\{{")
            for service, number in numbers.items():
                self.assertRegex(data, rf"{service}:\s*['\"]{number}['\"]")

    def test_every_itinerary_day_gets_an_emergency_control(self):
        js = (ROOT / "emergency.js").read_text(encoding="utf-8")
        self.assertIn("document.querySelectorAll('.day')", js)
        self.assertIn("emergency-day-btn", js)
        self.assertIn("openEmergency", js)

    def test_emergency_map_supports_all_required_facilities(self):
        html = (ROOT / "emergency.html").read_text(encoding="utf-8")
        js = (ROOT / "emergency-map.js").read_text(encoding="utf-8")
        for category in ("hospital", "pharmacy", "police", "fire_station"):
            self.assertIn(category, js)
        self.assertIn("overpass-api.de", js)
        self.assertIn("OpenStreetMap", html)
        self.assertIn("fallback-search", html)

    def test_phone_links_are_tel_links_and_require_confirmation(self):
        js = (ROOT / "emergency.js").read_text(encoding="utf-8")
        self.assertIn("tel:", js)
        self.assertIn("confirm", js.lower())


if __name__ == "__main__":
    unittest.main()
