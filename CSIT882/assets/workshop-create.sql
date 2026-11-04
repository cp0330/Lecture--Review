/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* Professional Training Workshops - Create database                  */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

CREATE TABLE Participant (
    participantNo DECIMAL(6)   NOT NULL,
    fname         VARCHAR(20)  NOT NULL,
    lname         VARCHAR(30)  NOT NULL,
    city          VARCHAR(30)  NOT NULL,
    state         VARCHAR(20)  NOT NULL,
    phone         VARCHAR(15)  NOT NULL,
    email         VARCHAR(80),
    CONSTRAINT Participant_pkey PRIMARY KEY (participantNo)
);

CREATE TABLE Qualification (
    participantNo DECIMAL(6)   NOT NULL,
    qname         VARCHAR(50)  NOT NULL,
    qlevel        DECIMAL(1)   NOT NULL,
    awardYear     DECIMAL(4),
    CONSTRAINT Qualification_pkey PRIMARY KEY (participantNo, qname),
    CONSTRAINT Qualification_fkey1 FOREIGN KEY (participantNo)
        REFERENCES Participant (participantNo)
);

CREATE TABLE Workshop (
    workshopNo DECIMAL(6)    NOT NULL,
    title      VARCHAR(100)  NOT NULL,
    category   VARCHAR(30)   NOT NULL,
    `date`     DATE          NOT NULL,
    fee        DECIMAL(5,2)  NOT NULL,
    capacity   DECIMAL(4)    NOT NULL,
    CONSTRAINT Workshop_pkey PRIMARY KEY (workshopNo)
);

CREATE TABLE Requirement (
    workshopNo   DECIMAL(6)   NOT NULL,
    qname        VARCHAR(50)  NOT NULL,
    requiredLevel DECIMAL(1)  NOT NULL,
    mandatory    CHAR(1)      NOT NULL,
    CONSTRAINT Requirement_pkey PRIMARY KEY (workshopNo, qname),
    CONSTRAINT Requirement_fkey1 FOREIGN KEY (workshopNo)
        REFERENCES Workshop (workshopNo)
);

CREATE TABLE Trainer (
    trainerNo    DECIMAL(6)   NOT NULL,
    fname        VARCHAR(20)  NOT NULL,
    lname        VARCHAR(30)  NOT NULL,
    organisation VARCHAR(80),
    expertise    VARCHAR(60)  NOT NULL,
    CONSTRAINT Trainer_pkey PRIMARY KEY (trainerNo)
);

CREATE TABLE Enrolment (
    participantNo DECIMAL(6)   NOT NULL,
    workshopNo    DECIMAL(6)   NOT NULL,
    enroldate     DATE         NOT NULL,
    status        VARCHAR(15)  NOT NULL,
    CONSTRAINT Enrolment_pkey PRIMARY KEY (participantNo, workshopNo),
    CONSTRAINT Enrolment_fkey1 FOREIGN KEY (participantNo)
        REFERENCES Participant (participantNo),
    CONSTRAINT Enrolment_fkey2 FOREIGN KEY (workshopNo)
        REFERENCES Workshop (workshopNo)
);

CREATE TABLE WorkshopTrainer (
    workshopNo DECIMAL(6)    NOT NULL,
    trainerNo  DECIMAL(6)    NOT NULL,
    topic      VARCHAR(100)  NOT NULL,
    CONSTRAINT WorkshopTrainer_pkey PRIMARY KEY (workshopNo, trainerNo),
    CONSTRAINT WorkshopTrainer_fkey1 FOREIGN KEY (workshopNo)
        REFERENCES Workshop (workshopNo),
    CONSTRAINT WorkshopTrainer_fkey2 FOREIGN KEY (trainerNo)
        REFERENCES Trainer (trainerNo)
);

COMMIT;
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* End of script                                                       */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
