CREATE SEQUENCE public.pages_id_seq
    INCREMENT 1
    START 102
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

CREATE TABLE public.pages
(
    id integer NOT NULL DEFAULT nextval('pages_id_seq'::regclass),
    path character varying COLLATE pg_catalog."default" NOT NULL,
    title character varying COLLATE pg_catalog."default" NOT NULL,
    slots jsonb NOT NULL,
    CONSTRAINT pages_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

