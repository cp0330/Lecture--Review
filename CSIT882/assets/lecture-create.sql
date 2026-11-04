
CREATE TABLE DEPARTMENT (
    name VARCHAR(50) NOT NULL,
    code CHAR(5) NOT NULL,
    total_staff_number DECIMAL(2) NOT NULL,
    chair VARCHAR(50) NULL,
    budget DECIMAL(9,1) NULL,
    CONSTRAINT dept_pkey PRIMARY KEY (name),
    CONSTRAINT dept_ckey1 UNIQUE (code),
    CONSTRAINT dept_ckey2 UNIQUE (chair),
    CONSTRAINT dept_check1 CHECK (total_staff_number BETWEEN 1 AND 50)
);
CREATE TABLE COURSE (
    cnum CHAR(7) NOT NULL,
    title VARCHAR(200) NOT NULL,
    credits DECIMAL(2) NOT NULL,
    offered_by VARCHAR(50) NULL,
    CONSTRAINT course_pkey PRIMARY KEY (cnum),
    CONSTRAINT course_check1 CHECK (credits IN (6,12)),
    CONSTRAINT course_fkey1 FOREIGN KEY (offered_by)
        REFERENCES DEPARTMENT(name) ON DELETE CASCADE
);
