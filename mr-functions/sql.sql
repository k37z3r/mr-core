CREATE TABLE `phone` (
  `dsid` bigint(20) NOT NULL,
  `phone_number` bigint(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `imei` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE `rank` (
  `rank` varchar(20) NOT NULL,
  `can_tp` enum('yes','no') NOT NULL DEFAULT 'no',
  `can_spawn_vehicle` enum('yes','no') NOT NULL DEFAULT 'no'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO `rank` (`rank`, `can_tp`, `can_spawn_vehicle`) VALUES
('admin', 'yes', 'no'),
('moderator', 'yes', 'no'),
('owner', 'yes', 'yes'),
('supporter', 'yes', 'no');

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL DEFAULT -1,
  `dsid` bigint(20) NOT NULL,
  `username` varchar(32) NOT NULL,
  `rank` enum('admin','moderator','supporter','citizen','owner') NOT NULL DEFAULT 'citizen',
  `health` decimal(4,1) NOT NULL DEFAULT 100.0,
  `shield` decimal(4,1) NOT NULL DEFAULT 100.0,
  `hunger` decimal(4,1) NOT NULL DEFAULT 100.0,
  `thirsty` decimal(4,1) NOT NULL DEFAULT 100.0,
  `toilet` decimal(4,1) NOT NULL DEFAULT 0.0,
  `temperatur` decimal(4,1) NOT NULL DEFAULT 50.0,
  `oxygen` decimal(4,1) NOT NULL DEFAULT 100.0,
  `running` decimal(4,1) NOT NULL DEFAULT 100.0,
  `stress` decimal(4,1) NOT NULL DEFAULT 0.0,
  `isdead` enum('yes','no') NOT NULL DEFAULT 'no',
  `cash` decimal(65,2) NOT NULL DEFAULT 150.00,
  `bank` decimal(65,2) NOT NULL DEFAULT 5000.00,
  `bmoney` decimal(65,2) NOT NULL DEFAULT 0.00
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

ALTER TABLE `phone`
  ADD PRIMARY KEY (`dsid`);

ALTER TABLE `rank`
  ADD PRIMARY KEY (`rank`);

ALTER TABLE `users`
  ADD PRIMARY KEY (`dsid`);
