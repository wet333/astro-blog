---
title: 'How Systemd works in Linux'
description: 'A short guide on how Systemd works in Linux'
pubDate: 'Dec 19 2023'
heroImage: '/images/post-placeholder-linux.png'
tags: [ 'linux', 'systemd' ]
---

## Introduction

Systemd is an init system and system manager that has become the de facto standard for many Linux distributions. It is
responsible for bootstrapping the user space and managing system processes after booting. It is a replacement for the
traditional UNIX System V init system.

<hr>

### Key Features of Systemd

**Service Management**: Systemd allows for the management of system services, providing functionalities such as
starting, stopping, and restarting services.

**Parallelization**: Systemd is capable of starting services in parallel, speeding up the boot process.

**Dependency Handling**: It can handle dependencies between services, ensuring that services are started in the
correct order.

**Socket Activation**: Services can be started on-demand when their corresponding sockets receive traffic.

**Timers**: Systemd timers can schedule tasks similar to cron jobs but with more flexibility.

**Logging**: Systemd integrates with journald, a logging daemon, for centralized logging.

**Cgroups Integration**: It uses Linux control groups (cgroups) for resource management of processes.

**Snapshot and Restoration**: Systemd can take snapshots of the system state, allowing for restoration to previous
states.

<hr>

### Structure and Components

- **Unit Files**: These are configuration files for systemd services, timers, sockets, etc.
- **Target Units**: They group together units, similar to runlevels in the SysV init system.
- **systemd-journald**: The service for logging and managing system logs.
- **systemd-logind**: Manages user logins and seats.

<hr>

### Creating a Systemd Service

#### **Create a Unit File**

    - Location: Place the unit file typically in `/etc/systemd/system/`.
    - Naming Convention: Name it `[service-name].service`.

Example Unit File:

   ```ini
   [Unit]
   Description=My Custom Service
   After=network.target

   [Service]
   ExecStart=/path/to/your/script.sh
   Restart=on-failure

   [Install]
   WantedBy=multi-user.target
   ```

<hr>

#### **Configure the Unit File**

- `[Unit]`: Includes metadata like description and dependencies.
- `[Service]`: Specifies how the service should be started or stopped.
- `[Install]`: Defines the behavior when the service is enabled or disabled.

<hr>

#### **Reload Systemd Daemon**

After creating or modifying a unit file, reload the systemd daemon to read the new configuration.

   ```bash
   sudo systemctl daemon-reload
   ```

<hr>

#### **Enable and Start the Service**

Enable: To ensure the service starts on boot.

```bash
sudo systemctl enable [service-name].service
```

Start: To start the service immediately.

```bash
sudo systemctl start [service-name].service
```

<hr>

#### **Check the Service Status**

To check the status of your service:

   ```bash
   sudo systemctl status [service-name].service
   ```

<hr>

#### **Logging and Troubleshooting**

    - Logs can be viewed using `journalctl`.
    - Troubleshoot using the status command and logs.

<hr>

## Best Practices

- **Security**: Apply security practices like using non-privileged users for running services.
- **Resource Management**: Use directives to limit resource usage if needed.
- **Documentation**: Document unit files and scripts for maintainability.

<hr>

### Conclusion

Systemd is a powerful and complex system manager integral to modern Linux distributions. Understanding its components
and correctly utilizing its features to manage services is crucial for system administrators and developers working in
Linux environments.