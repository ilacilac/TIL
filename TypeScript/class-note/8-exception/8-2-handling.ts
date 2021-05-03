{
  class TimeoutError extends Error {}
  class OfflineError extends Error {}

  class NetworkClient {
    tryConnect(): void {
      throw new Error('no network!');
    }
  }

  class userService {
    constructor(private client: NetworkClient) {}

    login() {
      // 이곳에서 error을 처리하여도, 할 수 있는것이 없다.
      this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: userService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        // show dialog to user
        // 이 경우엔, App 안에서 처리하는것이 가장 효율적
        // error => any type
        if (error instanceof OfflineError) {
          //
        }
      }
    }
  }

  const client = new NetworkClient();
  const service = new userService(client);
  const app = new App(service);
  app.run();

  // service.login();
}
