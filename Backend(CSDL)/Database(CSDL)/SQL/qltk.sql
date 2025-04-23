use qltk;

-- Bảng người dùng
create table users (
	user_id int auto_increment primary key,
    unique_id varchar(36) unique,
    email varchar(255) unique not null,
    phone varchar(15) unique,
    password_hash varchar(255) not null,
    full_name varchar(255),
    balance decimal(10, 2) default 0.00,
    status enum('active', 'inactive') default 'active',
    role enum('admin', 'staff', 'user') default 'user',
    created_at datetime default current_timestamp,
    updated_at datetime default current_timestamp on update current_timestamp
);

-- Bảng token
create table tokens (
	token_id int auto_increment primary key,
    user_id int,
    token varchar(255) not null,
    token_type ENUM('access', 'email_verification', 'password_reset', 'transaction_otp') NOT NULL,
    is_used boolean default false,
    expired_at datetime not null,
    created_at datetime default current_timestamp,
    foreign key(user_id) references users(user_id) on delete cascade
);

-- Bảng các gói nạp
CREATE TABLE recharge_plans (
    recharge_plan_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    bonus DECIMAL(10,2) DEFAULT 0.00, -- nếu có khuyến mãi
    description TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Bảng hóa đơn nạp tiền
create table payments (
	payment_id int auto_increment primary key,
    user_id int,
    recharge_plan_id INT,
    amount decimal(10, 2) not null,
    payment_method varchar(50) not null,
    status enum('pending', 'success', 'fail') default 'pending',
    transaction_id varchar(100) unique,
    created_at datetime default current_timestamp,
    foreign key(user_id) references users(user_id) on delete cascade,
    foreign key(recharge_plan_id) references recharge_plans(recharge_plan_id) on delete set null
);

-- Bảng gói thuê bao
create table transactions_log (
	transaction_id int auto_increment primary key,
    user_id int,
    type ENUM('recharge', 'usage', 'refund') NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- Bảng lịch sử hoạt động
CREATE TABLE activity_logs (
    activity_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    action VARCHAR(100) NOT NULL,
    description TEXT,
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

