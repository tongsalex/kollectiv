INSERT INTO artists(artist_id,username,password,first_name,last_name,image_url,bio,email)
VALUES
(1,E'alex',E'$2a$10$d0ssmdhtAwjzgjwUMIoNt.MgWakizCSVsdcKc2prCkGyKAtl9IkTC',E'Alex',E'Tong',E'https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e15/10731421_277108345820300_399623112_n.jpg?ig_cache_key=ODI4NzUwMTMzNTM3MzAyNDYx.2',E'hello. i wuv my dog blue.',E'tongsalex@gmail.com'),
(2,E'brendan',E'dfsfdsfdfd',NULL,NULL,E'https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/10904068_10205437845083945_2751342768120206261_o.jpg?oh=ecdb1d9967ef25d63af2ae885b446bb1&oe=58F093F5',NULL,NULL),
(3,E'elmo',E'dsfdsfsdfsfs',NULL,NULL,E'http://images.clipartpanda.com/elmo-face-clipart-13293_1348140085.gif',NULL,NULL),
(4,E'irwin',E'dsfsfdsfdf',NULL,NULL,E'http://vignette1.wikia.nocookie.net/muppet/images/5/5f/OscarsClassicStare.jpg/revision/latest?cb=20120222062511',NULL,NULL);

insert into blog_posts (title, subtitle, content, image_url, artist_id) values ('December 30th, The Law Return to NYC', 'Vivamus tortor. Duis mattis egesmpor convallis.', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Gaspard_Aug%C3%A9_and_Xavier_de_Rosnay_(Justice).jpg', 1);
insert into blog_posts (title, subtitle, content, image_url, artist_id) values ('Is It The End of the Weeknd?', 'Donnar lobortis est. Phasellus sit amet erat. Nulla tempus.', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 'http://celebmix.com/wp-content/uploads/2016/05/guess-the-song-the-weeknd-edition-01.jpg', 1);
insert into blog_posts (title, subtitle, content, image_url, artist_id) values ('Adaptive coherent software', 'Morbi , nisl. Nunc rhoncus dui vel sem.', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 'https://s-media-cache-ak0.pinimg.com/736x/73/ef/3f/73ef3f1bda8513e6f5732488df37eb28.jpg', 1);
insert into blog_posts (title, subtitle, content, image_url, artist_id) values ('Implemented maximized initiative', 'Vivamus metus arcn felis eu sapien cursus vestibulum.', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', 'http://www.okayfuture.com/wp-content/uploads/2013/09/ed-banger-10th-anniversary-.jpg', 1);
insert into blog_posts (title, subtitle, content, image_url, artist_id) values ('Decentralized disintermediate intranet', 'Proin at turpis a pede posuere nonummy. Integer non velit.', 'In congue. Etiam justo. Etiam pretium iaculis justo.', 'http://i.imgur.com/vYSBbar.jpg', 1);
insert into blog_posts (title, subtitle, content, image_url, artist_id) values ('Mandatory heuristic internet solution', 'Sed sagittis. Nam congue, risunt montes, nascetur ridiculus mus.', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 'http://www.edmtunes.com/wp-content/uploads/2016/06/MenbarPhotos_2.5.15_AnjunaDeep_Verboten-1632.jpg', 1);
insert into blog_posts (title, subtitle, content, image_url, artist_id) values ('Stand-alone bandwidth-monitored throughput', 'Aliquam non mauoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 'https://art8amby.files.wordpress.com/2011/08/zara-fw-2011-sean-opry-by-david-sims.jpg', 1);


INSERT INTO events (title, description, image_url, artist_id)
VALUES ('kollectiv w/ Cashmere Cat', 'Come see your favorite kitty at Brooklyns longtime powerhouse, Output.', 'http://edmnyc.com/wp-content/uploads/2016/08/JGBAJSEL_LOLLA16_DAY2_CASHMERECAT_P2.jpg', 1);

INSERT INTO events (title, description, image_url, artist_id)
VALUES ('kollectiv w/ Cashmere Cat', 'Come see your favorite kitty at Brooklyns longtime powerhouse, Output.', 'https://ticketleap-media-master.s3.amazonaws.com/f2fd5a99-0009-4fd3-8344-61dc211416be/hero.jpg', 1);

INSERT INTO events (title, description, image_url, artist_id)
VALUES ('kollectiv w/ Cashmere Cat', 'Come see your favorite kitty at Brooklyns longtime powerhouse, Output.', 'http://adamnoteve.net/wp-content/uploads/2014/11/10548028_703541029694659_9067514064830509303_o.jpg', 1);

INSERT INTO events (title, description, image_url, artist_id)
VALUES ('kollectiv w/ Cashmere Cat', 'Come see your favorite kitty at Brooklyns longtime powerhouse, Output.', 'http://grimesreference.e-monsite.com/medias/images/tokimonsta-by-julian-bajsel.jpg', 1);





