CREATE TABLE `users` (
  `id` bigint(20) NOT NULL DEFAULT -1,
  `dsid` bigint(20) NOT NULL,
  `username` varchar(32) NOT NULL,
  `isAdmin` enum('yes','no') NOT NULL DEFAULT 'no',
  `isMod` enum('yes','no') NOT NULL DEFAULT 'no',
  `isSupporter` enum('yes','no') NOT NULL DEFAULT 'no'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
ALTER TABLE `users`
  ADD PRIMARY KEY (`dsid`);
COMMIT;
