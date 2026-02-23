CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`home_address` text,
	`phone_number` text,
	`profile_picture` blob,
	`profile_picture2` text DEFAULT 'https://drive.googlecontent.com/uhome_addressser3_profile_picture.png',
	`weight` real,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);