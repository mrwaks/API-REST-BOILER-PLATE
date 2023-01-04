# To Write Up...

from locust import HttpUser, task

name = str("Saitama")

class LoadTest(HttpUser):
    @task
    def get_greeting_page(self):
        res = self.client.get(f"/hello?name={name}")
        print(res.content)