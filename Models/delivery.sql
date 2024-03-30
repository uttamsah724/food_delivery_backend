CREATE TABLE organizations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    type VARCHAR(50) NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE pricings (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL REFERENCES organizations(id),
    item_id INTEGER NOT NULL REFERENCES items(id),
    zone VARCHAR(50) NOT NULL,
    base_distance_in_km INTEGER NOT NULL,
    km_price NUMERIC NOT NULL,
    fix_price NUMERIC NOT NULL
);
