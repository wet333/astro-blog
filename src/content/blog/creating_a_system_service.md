---
title: 'How to create a Systemd service in Ubuntu Linux'
description: 'A short guide on how to create a Systemd service in Ubuntu Linux'
pubDate: 'Dec 12 2023'
heroImage: '/post-placeholder-linux2.png'
---

**Create a Shell Script**: First, you'll need a shell script that defines what your service should do. For this
example, let's create a simple script. Open a terminal and run:

    ```bash
    nano /path/to/your/script.sh
    ```

Replace `/path/to/your/script.sh` with the actual path where you want to create your script. Then, add the following
content to the script:

    ```bash
    #!/bin/bash
    echo "Hello, World!" >> /tmp/my_service_log.txt
    ```

Save the file and exit the text editor (in Nano, you can do this by pressing `Ctrl+O`, then `Enter`, and `Ctrl+X`).

---

**Make the Script Executable**: Make sure your script is executable by running:

    ```bash
    chmod +x /path/to/your/script.sh
    ```

---

**Create a Systemd Service Unit**: Now, you need to create a systemd unit file for your service. Run:

    ```bash
    sudo nano /etc/systemd/system/my_service.service
    ```

Then, add the following content:

    ```ini
    [Unit]
    Description=My Service
    After=network.target

    [Service]
    ExecStart=/path/to/your/script.sh
    Restart=always
    User=your_username

    [Install]
    WantedBy=multi-user.target
    ```

Replace:

- `your_username` with your actual username.
- `/path/to/your/script.sh` with the full path to your script.

Save the file and exit the text editor.

---

**Enable and Start the Service**: To enable the service and make it start at boot, run:

    ```bash
    sudo systemctl enable my_service.service
    ```

To start the service immediately, use:

    ```bash
    sudo systemctl start my_service.service
    ```

---

**Check Service Status**: You can check the status of your service with:

    ```bash
    sudo systemctl status my_service.service
    ```

It should show that the service is active and running.

---

**Reboot**: You can test that your service starts automatically by rebooting your PC:

    ```bash
    sudo reboot
    ```

After the reboot, your service should automatically start and print "Hello, World!" to the `/tmp/my_service_log.txt`
file.

That's it! You've created a simple Ubuntu Linux service that starts when your PC is turned on.